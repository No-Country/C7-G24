package com.bdabalcarce.demo.Dto;

import com.bdabalcarce.demo.Entities.Company;
import com.bdabalcarce.demo.Entities.User;

import javax.validation.constraints.NotBlank;
import java.util.Date;

public class DonationDto {
    @NotBlank
    private String donCategory;

    @NotBlank
    private Boolean donPerishable;

    private Date donExpiration;

    private String donDetails;

    private UserDto user;

    private CompanyDto company;

    public DonationDto() {
    }

    public DonationDto(String donCategory, Boolean donPerishable, Date donExpiration, String donDetails, UserDto user, CompanyDto company) {
        this.donCategory = donCategory;
        this.donPerishable = donPerishable;
        this.donExpiration = donExpiration;
        this.donDetails = donDetails;
        this.user = user;
        this.company = company;

    }

    public String getDonCategory() {
        return donCategory;
    }

    public void setDonCategory(String donCategory) {
        this.donCategory = donCategory;
    }

    public Boolean getDonPerishable() {
        return donPerishable;
    }

    public void setDonPerishable(Boolean donPerishable) {
        this.donPerishable = donPerishable;
    }

    public Date getDonExpiration() {
        return donExpiration;
    }

    public void setDonExpiration(Date donExpiration) {
        this.donExpiration = donExpiration;
    }

    public String getDonDetails() {
        return donDetails;
    }

    public void setDonDetails(String donDetails) {
        this.donDetails = donDetails;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    public CompanyDto getCompany() {
        return company;
    }

    public void setCompany(CompanyDto company) {
        this.company = company;
    }
}
