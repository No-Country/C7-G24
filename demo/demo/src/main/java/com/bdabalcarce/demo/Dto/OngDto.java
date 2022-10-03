package com.bdabalcarce.demo.Dto;

import javax.validation.constraints.NotBlank;

public class OngDto {

    @NotBlank
    private String ongName;

    @NotBlank
    private String ongCuit;

    @NotBlank
    private String ongReason;

    @NotBlank
    private String ongHeadNm;

    @NotBlank
    private String ongHeadLn;

    @NotBlank
    private String ongAddress;

    private String ongPhone;

    private String ongEmail;

    public OngDto() {
    }

    public OngDto(String ongName, String ongCuit, String ongReason, String ongHeadNm, String ongHeadLn, String ongAddress, String ongPhone, String ongEmail) {
        this.ongName = ongName;
        this.ongCuit = ongCuit;
        this.ongReason = ongReason;
        this.ongHeadNm = ongHeadNm;
        this.ongHeadLn = ongHeadLn;
        this.ongAddress = ongAddress;
        this.ongPhone = ongPhone;
        this.ongEmail = ongEmail;
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

