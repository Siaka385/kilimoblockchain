package asfuncss

import (
	"net/http"
	"text/template"
)

func LoadBankDetails(w http.ResponseWriter, r *http.Request) {
	tmp, _ := template.ParseFiles("bankinfo.html")
	tmp.Execute(w, nil)
}
