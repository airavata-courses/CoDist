package ioFormatting

// type LogDetailsStructure struct {
// 	Year    string `json:"year"`
// 	Month   string `json:"month"`
// 	Date    string `json:"date"`
// 	Hour    string `json:"hour"`
// 	Minute  string `json:"minute"`
// 	Second  string `json:"seconds"`
// 	Station string `json:"station"`
// }

type InputLog struct {
	UserId        string `json:"userId"`
	LogIdentifier string `json:"logIdentifier"`
	LogType       string `json:"logType"`
	LogDetails    string `json:"logDetails"`
	// CreatedOn     string `json:"createdOn"`
	// Message       string `json:"message"`
	// Service       string `json:"service"`
}

// {
//     "userId": "1",
//     "logIdentifier": "8792",
//     "logType": "REQUEST",
//     "logDetails": "{\"year\":\"2015\", \"month\":\"05\", \"date\":\"13\", \"hour\":\"23\", \"minute\":\"59\", \"seconds\":\"35\"}",
//     "createdOn":"2022-03-15 09:04:55"
// }

type ReturnLog struct {
	UserId        string `json:"userId"`
	LogIdentifier string `json:"logIdentifier"`
	LogType       string `json:"logType"`
	LogDetails    string `json:"logDetails"`
	InsertedOn    string `json:"insertedOn"`
	// CreatedOn     string `json:"createdOn"`
	// Message       string `json:"message"`
	// Service       string `json:"service"`
}
