package asfuncss

// import (
// 	"database/sql"
// 	"fmt"

// 	_ "github.com/go-sql-driver/mysql"
// )

// func ConnectToMysql() {
// 	// Define the connection string
// 	dsn := "root:123@tcp(127.0.0.1:3306)/kilimoblockchain"

// 	// Open the database connection
// 	db, err := sql.Open("mysql", dsn)
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer db.Close()

// 	// Ping the database to test the connection
// 	err = db.Ping()
// 	if err != nil {
// 		fmt.Println("Error pinging database:", err)
// 		return
// 	}

// 	fmt.Println("Successfully connected to the database!")

// }

// func profileHandler(w http.ResponseWriter, r *http.Request) {
//     if r.Method == http.MethodPost {
//         // Parse form data
//         r.ParseForm()
//         name := r.FormValue("name")
//         email := r.FormValue("email")
//         phone := r.FormValue("phone")
//         location := r.FormValue("location")

//         // For demonstration purposes, print the form data
//         fmt.Printf("Name: %s, Email: %s, Phone: %s, Location: %s\n", name, email, phone, location)

//         // Respond with JSON
//         response := map[string]string{
//             "status":  "success",
//             "message": "Profile updated successfully",
//         }
//         w.Header().Set("Content-Type", "application/json")
//         json.NewEncoder(w).Encode(response)
//     } else {
//         http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
//     }
// }

// func main() {
//     http.HandleFunc("/your-endpoint", profileHandler)
//     http.ListenAndServe(":8080", nil)
// }
