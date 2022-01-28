package com.dataingestor.dataingestor.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SearchLink implements Serializable {

    public String year;
    public String month;
    public String day;
    public String station;

}
