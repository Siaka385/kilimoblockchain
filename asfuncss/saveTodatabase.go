package asfuncss

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"text/template"
)

type User struct {
	Name            string `json:"name"`
	Username        string `json:"username"`
	Email           string `json:"email"`
	PhoneNumber     string `json:"phoneNumber"`
	Password        string `json:"password"`
	Confirmpassword string `json:"confirmpassword"`
}

type PageData struct {
	ErrorMessage string
}

var Email string

func Reg(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	user := User{
		Name:            r.FormValue("Name"),
		Username:        r.FormValue("Username"),
		Email:           r.FormValue("Email"),
		PhoneNumber:     r.FormValue("PhoneNumber"),
		Password:        r.FormValue("Password"),
		Confirmpassword: r.FormValue("ConfirmPassword"),
	}

	if CheckUsernameExist(user.Email, w) {

		data := PageData{"Email already exist"}
		tmpl, _ := template.ParseFiles("Signup.html")
		err := tmpl.Execute(w, data)
		if err != nil {
			log.Fatalf("template parsing error: %v", err)
		}
		log.Printf("Executing template with data: %+v", data)
		return

	} else if ChecknameExist(user.Username, w) {
		data := PageData{"username already exist"}
		tmpl, _ := template.ParseFiles("Signup.html")
		err := tmpl.Execute(w, data)
		if err != nil {
			log.Fatalf("template parsing error: %v", err)
		}
		log.Printf("Executing template with data: %+v", data)
		return
	} else if user.Password != user.Confirmpassword {

		data := PageData{"Password should be same"}
		tmpl, _ := template.ParseFiles("Signup.html")
		err := tmpl.Execute(w, data)
		if err != nil {
			log.Fatalf("template parsing error: %v", err)
		}
		log.Printf("Executing template with data: %+v", data)
		return
	} else {
		fmt.Println("all good here")
		user.Password = Hashpassword(user.Password)
		user.Confirmpassword = user.Password
		Email = user.Email
		SaveDetails(user, w)
		http.Redirect(w, r, "/loadfarm", http.StatusFound)
	}
}

func AboutUs(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("Dashboard.html"))
	tmpl.Execute(w, nil)
}

func SaveDetails(user User, w http.ResponseWriter) {
	databaseFile := "users.json"

	var users []User
	if _, err := os.Stat(databaseFile); err == nil {
		// If the file exists, read the existing users
		fileContent, err := os.ReadFile(databaseFile)
		if err != nil {
			http.Error(w, "INTERNAL k SERVER ERROR", http.StatusInternalServerError)
			return
		}
		json.Unmarshal(fileContent, &users)
	}

	// Append the new user to the users slice
	users = append(users, user)

	// Marshal the updated users slice to JSON
	data, err := json.MarshalIndent(users, "", "  ")
	if err != nil {
		http.Error(w, "INTERNAL m SERVER ERROR", http.StatusInternalServerError)
		return
	}

	// Write the JSON data to the file
	err = os.WriteFile(databaseFile, data, 0o644)
	fmt.Println("file saved")
	if err != nil {
		http.Error(w, "INTERNAL f SERVER ERROR", http.StatusInternalServerError)
		return
	}
}
