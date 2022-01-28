package com.dataingestor.dataingestor.model;
import com.dataingestor.dataingestor.model.SearchLink;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class InputStatus {

    private SearchLink link;
}
