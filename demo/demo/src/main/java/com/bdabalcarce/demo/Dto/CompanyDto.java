package com.bdabalcarce.demo.Dto;



import javax.validation.constraints.NotBlank;

public class CompanyDto {

    @NotBlank
    private String coName;

    @NotBlank
    private String coCategory;

    @NotBlank
    private String coCuit;

    @NotBlank
    private String coEmail;

    @NotBlank
    private String coPhone;

    @NotBlank
    private String coAddress;

    @NotBlank
    private String coContactNm;

    @NotBlank
    private String coContactLn;


    public CompanyDto() {
    }

    public CompanyDto(String coName, String coCategory, String coCuit, String coEmail, String coPhone, String coAddress, String coContactNm, String coContactLn) {
        this.coName = coName;
        this.coCategory = coCategory;
        this.coCuit = coCuit;
        this.coEmail = coEmail;
        this.coPhone = coPhone;
        this.coAddress = coAddress;
        this.coContactNm = coContactNm;
        this.coContactLn = coContactLn;
    }

    public String getCoName() {
        return coName;
    }

    public void setCoName(String coName) {
        this.coName = coName;
    }

    public String getCoCategory() {
        return coCategory;
    }

    public void setCoCategory(String coCategory) {
        this.coCategory = coCategory;
    }

    public String getCoCuit() {
        return coCuit;
    }

    public void setCoCuit(String coCuit) {
        this.coCuit = coCuit;
    }

    public String getCoEmail() {
        return coEmail;
    }

    public void setCoEmail(String coEmail) {
        this.coEmail = coEmail;
    }

    public String getCoPhone() {
        return coPhone;
    }

    public void setCoPhone(String coPhone) {
        this.coPhone = coPhone;
    }

    public String getCoAddress() {
        return coAddress;
    }

    public void setCoAddress(String coAddress) {
        this.coAddress = coAddress;
    }

    public String getCoContactNm() {
        return coContactNm;
    }

    public void setCoContactNm(String coContactNm) {
        this.coContactNm = coContactNm;
    }

    public String getCoContactLn() {
        return coContactLn;
    }

    public void setCoContactLn(String coContactLn) {
        this.coContactLn = coContactLn;
    }
}