package main

import (
	"fmt"
	"net/http"
	"text/template"

	"AgrModel_blockchain/asfuncss"
)

func SignUphandler(w http.ResponseWriter) {
	tmp, _ := template.ParseFiles("index.html")

	tmp.Execute(w, nil)
}

func Loginpageload(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	tmp, _ := template.ParseFiles("login.html")
	tmp.Execute(w, nil)
}

func router(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path == "/" {

		SignUphandler(w)
	} else if r.URL.Path == "/reg" {
		asfuncss.Reg(w, r)
	} else if r.URL.Path == "/log" {
		Loginpageload(w, r)
	} else if r.URL.Path == "/signin" {
		signin(w, r)
	} else if r.URL.Path == "/Dashboard" {
		asfuncss.DashboardHandler(w, r)
	} else if r.URL.Path == "/signup" {
		signup(w, r)
	} else if r.URL.Path == "/login" {
		asfuncss.Login(w, r)
	}
}

func signup(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	tmp, _ := template.ParseFiles("Signup.html")
	tmp.Execute(w, nil)
}

func signin(w http.ResponseWriter, r *http.Request) {
	fmt.Println("ffffffffffffff")
	tmp, _ := template.ParseFiles("login.html")
	tmp.Execute(w, nil)
}

func main() {
	mux := http.NewServeMux()

	// Serve static files
	fs := http.FileServer(http.Dir("static"))
	mux.Handle("/static/", http.StripPrefix("/static/", fs))

	// Serve images
	imageServer := http.FileServer(http.Dir("Images"))
	mux.Handle("/Images/", http.StripPrefix("/Images/", imageServer))

	mux.HandleFunc("/", router)

	fmt.Println("RUNNING SERVER")
	http.ListenAndServe("localhost:8078", mux)
}
