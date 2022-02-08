package database

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

// Returns a String for connection
func getConnectionString() string {
	fmt.Println("getConnectionString")
	host, port, user, password, dbname := GetdbCred()
	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	return psqlInfo
}

// Returns a DB Object.
func StartConnection() *sql.DB {
	fmt.Println("StartConnection Called")
	connectionString := getConnectionString()
	db, err := sql.Open("postgres", connectionString)
	if err != nil {
		panic(err)
	}
	err = db.Ping()
	if err != nil {
		panic(err)
	}
	// defer db.Close()

	fmt.Println("Successfully connected!")
	return db
}
