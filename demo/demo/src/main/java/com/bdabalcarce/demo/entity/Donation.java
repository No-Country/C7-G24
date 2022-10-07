package com.bdabalcarce.demo.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name="donations")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_donation;

    @NotNull
    @Size(max = 25)
    @Column(name = "don_category")
    private String donCategory;

    @NotNull
    @Column (name = "don_perishable")
    private Boolean donPerishable;

    @Column(name = "don_expiration")
    private Date donExpiration;

    @Size(max = 200)
    @Column (name = "don_details")
    private String donDetails;


    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.DETACH,CascadeType.REFRESH})
    @JoinColumn(name = "id_user", nullable = true)
    private User user;


    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.DETACH,CascadeType.REFRESH})
    @JoinColumn(name = "id_company", nullable = true)

    private Company company;


    public Donation() {
    }

    public Donation(String donCategory, Boolean donPerishable, Date donExpiration, String donDetails, User user, Company company) {
        this.donCategory = donCategory;
        this.donPerishable = donPerishable;
        this.donExpiration = donExpiration;
        this.donDetails = donDetails;
        this.user = user;
        this.company = company;

    }


    public int getId_donation() {
        return id_donation;
    }

    public void setId_donation(int id_donation) {
        this.id_donation = id_donation;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

}