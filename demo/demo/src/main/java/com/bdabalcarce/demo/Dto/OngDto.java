package com.bdabalcarce.demo.Dto;
import javax.validation.constraints.NotBlank;

public class OngDto {
    @NotBlank
    private String ongname;
    @NotBlank
    private String ongcuit;
    @NotBlank
    private String ongreason;
    @NotBlank
    private String ongheadnm;
    @NotBlank
    private String ongheadln;
    @NotBlank
    private String ongaddress;
    private String ongphone;
    private String ongemail;

    public OngDto() {
    }

    public OngDto(String ongname, String ongcuit, String ongreason, String ongheadnm, String ongheadln, String ongaddress, String ongphone, String ongemail) {
        this.ongname = ongname;
        this.ongcuit = ongcuit;
        this.ongreason = ongreason;
        this.ongheadnm = ongheadnm;
        this.ongheadln = ongheadln;
        this.ongaddress = ongaddress;
        this.ongphone = ongphone;
        this.ongemail = ongemail;
    }


}
