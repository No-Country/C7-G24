package com.bdabalcarce.demo.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name="company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //campo primary key autogenerado
    private int id_company;

    @NotBlank
    @Size(max = 80)
    @Column(name = "co_name")
    private String coName;

    @NotBlank
    @Size (max = 25)
    @Column(name = "co_category")
    private String coCategory;

    @NotBlank
    @Size (max = 15)
    @Column(name = "co_cuit")
    private String coCuit;

    @NotBlank
    @Size (max = 25)
    @Column(name = "co_email")
    private String coEmail;

    @NotBlank
    @Size (max = 15)
    @Column(name = "co_phone")
    private String coPhone;

    @Size (max = 50)
    @Column(name = "co_address")
    private String coAdress;

    @Size (max = 20)
    @Column(name = "co_ContactNm")
    private String coContactNm;

    @Size (max = 20)
    @Column(name = "co_ContactLn")
    private String coContactLn;

    public Company() {
    }

    public Company(String coName, String coCategory, String coCuit, String coEmail, String coPhone, String coAdress, String coContactNm, String coContactLn) {
        this.coName = coName;
        this.coCategory = coCategory;
        this.coCuit = coCuit;
        this.coEmail = coEmail;
        this.coPhone = coPhone;
        this.coAdress = coAdress;
        this.coContactNm = coContactNm;
        this.coContactLn = coContactLn;
    }

    public int getId_company() {
        return id_company;
    }

    public void setId_company(int id_company) {
        this.id_company = id_company;
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

    public String getCoAdress() {
        return coAdress;
    }

    public void setCoAdress(String coAdress) {
        this.coAdress = coAdress;
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