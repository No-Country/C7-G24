package com.c7g24.bdaBalcarce.dtos;

import javax.validation.constraints.NotBlank;

public class usersDto {
    @NotBlank
    private String userName;

    @NotBlank
    private String userLastname;

    @NotBlank
    private String userDni;

    @NotBlank
    private String userEmail;

    @NotBlank
    private String userPhone;

    @NotBlank
    private String userDireccion;

    private String userVehicle;

    private String userDiponibilidad;

    public usersDto() {
    }

    public usersDto(String userName, String userLastname, String userDni, String userEmail, String userPhone, String userDireccion, String userVehicle, String userDiponibilidad) {
        this.userName = userName;
        this.userLastname = userLastname;
        this.userDni = userDni;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
        this.userDireccion = userDireccion;
        this.userVehicle = userVehicle;
        this.userDiponibilidad = userDiponibilidad;
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

    public String getUserDireccion() {
        return userDireccion;
    }

    public void setUserDireccion(String userDireccion) {
        this.userDireccion = userDireccion;
    }

    public String getUserVehicle() {
        return userVehicle;
    }

    public void setUserVehicle(String userVehicle) {
        this.userVehicle = userVehicle;
    }

    public String getUserDiponibilidad() {
        return userDiponibilidad;
    }

    public void setUserDiponibilidad(String userDiponibilidad) {
        this.userDiponibilidad = userDiponibilidad;
    }
}



