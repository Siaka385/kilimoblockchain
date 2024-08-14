package asfuncss

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func ConnectToMysql() {
	// Define the connection string
	dsn := "root:123@tcp(127.0.0.1:3306)/kilimoblockchain"

	// Open the database connection
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Ping the database to test the connection
	err = db.Ping()
	if err != nil {
		fmt.Println("Error pinging database:", err)
		return
	}

	fmt.Println("Successfully connected to the database!")

}
