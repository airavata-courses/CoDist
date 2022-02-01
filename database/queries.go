package database

import (
	"database/sql"
	"log"
	"project/ioFormatting"
)

var db *sql.DB

func CreateTableIfNotExistsQuery() {

	if db == nil {
		StarterCode()
	}

	sqlStatement := `
		CREATE TABLE IF NOT EXISTS logs_table(
			id SERIAL PRIMARY KEY,
			log_identifier VARCHAR,
			log_type VARCHAR,
			log_details VARCHAR,
			user_id VARCHAR,
			inserted_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		)`
	_, err := db.Exec(sqlStatement)

	if err != nil {
		log.Println("CreateTableIfNotExistsQuery ERROR")
		panic(err)
	}
	log.Println("SUCCESSFULLY CREATED TABLE	OR ALREADY PRESENT.")
}

func InsertIntoQuery(newLog ioFormatting.InputLog) {
	if db == nil {
		StarterCode()
	}

	CreateTableIfNotExistsQuery()

	sqlStatement := `
		INSERT INTO logs_table (user_id, log_identifier, log_type, log_details)
		VALUES ($1, $2, $3, $4)`

	_, err := db.Exec(sqlStatement, newLog.UserId, newLog.LogIdentifier, newLog.LogType, newLog.LogDetails)
	if err != nil {
		panic(err)
	}
}

// Array of Objects.
func GetUserHistory(requestedUserId string) []ioFormatting.ReturnLog {
	if db == nil {
		StarterCode()
	}

	CreateTableIfNotExistsQuery()

	log.Println("logger in GetUserHistory")

	sqlStatement := `
		SELECT user_id, log_identifier, log_type, log_details, inserted_on
		FROM logs_table
		WHERE user_id = $1;`

	rows, err := db.Query(sqlStatement, requestedUserId)
	if err != nil {
		log.Println("GetUserHistory Error")
		panic(err)
	}
	defer rows.Close()

	var returnlogs []ioFormatting.ReturnLog

	for rows.Next() {

		var returnLog ioFormatting.ReturnLog

		err = rows.Scan(&returnLog.UserId, &returnLog.LogIdentifier, &returnLog.LogType, &returnLog.LogDetails, &returnLog.InsertedOn)
		if err != nil {
			// handle this error
			panic(err)
		}

		returnlogs = append(returnlogs, returnLog)
		// get any error encountered during iteration
		err = rows.Err()
		if err != nil {
			panic(err)
		}
	}
	return returnlogs
}
func StarterCode() {

	db = StartConnection()
	if db == nil {
		log.Panic("DB NOT INITIAZED PROPERLY")
	}

	log.Println("DB INITIATED PROPERLY")
}
