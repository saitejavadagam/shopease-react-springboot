package com.zeptoneon.backend.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ProductResponse {

    private Long id;
    private String title;
    private String category;
    private String subcategory;
    private Double price;
    private Double mrp;
    private Double rating;
    private Integer reviews;
    private Integer bought;
    private Boolean sponsored;
    private String image;

}
