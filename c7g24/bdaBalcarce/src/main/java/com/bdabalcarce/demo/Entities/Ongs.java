package com.bdabalcarce.demo.Entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table (name = "ongs")
public class Ongs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //campo primary key autogenerado
    private int id_ong;

    @NotNull
    @Size (max = 50)
    @Column (name = "ong_name")
    private String ongName;

    @NotNull
    @Size (max = 15)
    @Column (name = "ong_cuit")
    private String ongCuit;

    @NotNull
    @Size (max = 50)
    @Column (name = "ong_reason")
    private String ongReason;

    @NotNull
    @Size (max = 25)
    @Column (name = "ong_headNm")
    private String ongHeadNm;

    @NotNull
    @Size (max = 25)
    @Column (name = "ong_headLn")
    private String ongHeadLn;

    @Size (max = 50)
    @Column (name = "ong_address")
    private String ongAddress;

    @Size (max = 20)
    @Column (name = "ong_phone")
    private String ongPhone;

    @Size (max = 30)
    @Column (name = "ong_email")
    private String ongEmail;

    public Ongs() {
    }

    public Ongs(String ongName, String ongCuit, String ongReason, String ongHeadNm, String ongHeadLn, String ongAddress, String ongPhone, String ongEmail) {
        this.ongName = ongName;
        this.ongCuit = ongCuit;
        this.ongReason = ongReason;
        this.ongHeadNm = ongHeadNm;
        this.ongHeadLn = ongHeadLn;
        this.ongAddress = ongAddress;
        this.ongPhone = ongPhone;
        this.ongEmail = ongEmail;
    }

    public int getId_ong() {
        return id_ong;
    }

    public void setId_ong(int id_ong) {
        this.id_ong = id_ong;
    }

    public String getOngName() {
        return ongName;
    }

    public void setOngName(String ongName) {
        this.ongName = ongName;
    }

    public String getOngCuit() {
        return ongCuit;
    }

    public void setOngCuit(String ongCuit) {
        this.ongCuit = ongCuit;
    }

    public String getOngReason() {
        return ongReason;
    }

    public void setOngReason(String ongReason) {
        this.ongReason = ongReason;
    }

    public String getOngHeadNm() {
        return ongHeadNm;
    }

    public void setOngHeadNm(String ongHeadNm) {
        this.ongHeadNm = ongHeadNm;
    }

    public String getOngHeadLn() {
        return ongHeadLn;
    }

    public void setOngHeadLn(String ongHeadLn) {
        this.ongHeadLn = ongHeadLn;
    }

    public String getOngAddress() {
        return ongAddress;
    }

    public void setOngAddress(String ongAddress) {
        this.ongAddress = ongAddress;
    }

    public String getOngPhone() {
        return ongPhone;
    }

    public void setOngPhone(String ongPhone) {
        this.ongPhone = ongPhone;
    }

    public String getOngEmail() {
        return ongEmail;
    }

    public void setOngEmail(String ongEmail) {
        this.ongEmail = ongEmail;
    }
}
