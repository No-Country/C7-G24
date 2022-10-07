package com.bdabalcarce.demo.Dto;


import com.bdabalcarce.demo.entity.Donation;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;


public class UserDto {


    private  String userRol;
    @NotBlank
    private String userName;

    @NotBlank
    private String userLastname;

    @NotBlank
    private String userDni;

    private String userEmail;


    private String userPhone;


    private String userAdress;


    private String userVehicle;


    private String userAbailability;

    private List<Donation> donaciones = new ArrayList<Donation>();
    public UserDto() {
    }

    public UserDto(String userDni, String userRol, String userName, String userLastname,  String userEmail, String userPhone, String userAdress, String userVehicle, String userAbailability) {
        this.userDni = userDni;
        this.userRol = userRol;
        this.userName = userName;
        this.userLastname = userLastname;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
        this.userAdress = userAdress;
        this.userVehicle = userVehicle;
        this.userAbailability = userAbailability;
    }

    public String getUserRol() {
        return userRol;
    }

    public void setUserRol(String userRol) {
        this.userRol = userRol;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserLastname() {
        return userLastname;
    }

    public void setUserLastname(String userLastname) {
        this.userLastname = userLastname;
    }

    public String getUserDni() {
        return userDni;
    }

    public void setUserDni(String userDni) {
        this.userDni = userDni;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getUserAdress() {
        return userAdress;
    }

    public void setUserAdress(String userAdress) {
        this.userAdress = userAdress;
    }

    public String getUserVehicle() {
        return userVehicle;
    }

    public void setUserVehicle(String userVehicle) {
        this.userVehicle = userVehicle;
    }

    public String getUserAbailability() {
        return userAbailability;
    }

    public void setUserAbailability(String userAbailability) {
        this.userAbailability = userAbailability;
    }

    public List<Donation> getDonaciones() {
        return donaciones;
    }

    public void setDonaciones(List<Donation> donaciones) {
        this.donaciones = donaciones;
    }
}