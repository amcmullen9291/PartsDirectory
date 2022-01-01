package com.parts_directory.Model;

import javax.persistence.*;
import java.util.Random;

@Entity
@Table(name = "inventory")
public class Part {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "part_number")
    private String partNumber;

    @Column(name = "department")
    private String department;

    @Column(name = "aisle_number")
    private int aisleNumber;

    @Column(name = "price")
    private float price;

    @Column(name = "manufacturer")
    private String manufacturer;

    @Column(name = "part_name")
    private String partName;

    @Column(name = "image")
    private String image;

    public Part(){}

    public Part(String partName, String manufacturer, String department, int aisleNumber, float price, String image){
        this.aisleNumber = aisleNumber;
        this.manufacturer = manufacturer;
        this.partName = partName;
        this.partNumber = generatePartsNumber();
        this.department = department;
        this.price = price;
        this.image = image;
    }

    public long getId() {
        return id;
    }

    public void setId(long id){ this.id = id;}

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public int getAisleNumber() {
        return aisleNumber;
    }

    public void setAisleNumber(int aisleNumber) {
        this.aisleNumber = aisleNumber;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getPartName() {
        return partName;
    }

    public void setPartName(String partName) {
        this.partName = partName;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String generatePartsNumber() {
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();

        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        return generatedString;
    }
}
