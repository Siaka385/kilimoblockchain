package asfuncss

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"text/template"
)

type Farm struct {
	Farmname    string
	Farmsize    string
	ProductType []string
	Years       string
	Username    string
}

func LoadFarm(w http.ResponseWriter, r *http.Request) {
	tmpl, _ := template.ParseFiles("farminfo.html")
	tmpl.Execute(w, nil)
}

func FarmHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	myfarm := Farm{
		Farmname:    r.FormValue("farmName"),
		Farmsize:    r.FormValue(("farmSize")),
		ProductType: r.Form["products"],
		Years:       r.FormValue(("experience")),
	}

	var farm []Farm

	file, err := os.ReadFile("trial.json")
	if err != nil {
		fmt.Println("error")
		return
	}

	json.Unmarshal(file, &farm)

	farm = append(farm, myfarm)

	// Marshal the farm struct to JSON
	data, err := json.MarshalIndent(farm, "", "  ")
	if err != nil {
		log.Printf("Error marshaling farm data: %v", err)
		http.Error(w, "INTERNAL SERVER ERROR", http.StatusInternalServerError)
		return
	}

	// Write the JSON data to the file
	err = os.WriteFile("trial.json", data, 0o644)
	if err != nil {
		log.Printf("Error writing to file %s: %v", file, err)
		http.Error(w, "INTERNAL SERVER ERROR", http.StatusInternalServerError)
		return
	}

	// Set CORS headers
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:8078")
	w.Header().Set("Access-Control-Allow-Credentials", "true")

	// Handle preflight requests
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	// Set the Content-Type header to application/json
	w.Header().Set("Content-Type", "application/json")

	// Encode the farm struct to JSON and write it to the response
	if err := json.NewEncoder(w).Encode(farm); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	http.Redirect(w, r, "/loadbankdetails", http.StatusFound)
}
