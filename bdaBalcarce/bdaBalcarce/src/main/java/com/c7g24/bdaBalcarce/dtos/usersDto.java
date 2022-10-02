package com.c7g24.bdaBalcarce.dtos;


public class usersDto {

    private String userName;


    private String userLastname;


    private String userDni;


    private String userEmail;


    private String userPhone;


    private String userAddress;

    private String userVehicle;

    private String userTime;

    public usersDto() {
    }

    public usersDto(String userName, String userLastname, String userDni, String userEmail, String userPhone, String userDireccion, String userVehicle, String userDiponibilidad) {
        this.userName = userName;
        this.userLastname = userLastname;
        this.userDni = userDni;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
        this.userAddress = userDireccion;
        this.userVehicle = userVehicle;
        this.userTime = userDiponibilidad;
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
        return userAddress;
    }

    public void setUserDireccion(String userDireccion) {
        this.userAddress = userDireccion;
    }

    public String getUserVehicle() {
        return userVehicle;
    }

    public void setUserVehicle(String userVehicle) {
        this.userVehicle = userVehicle;
    }

    public String getUserDiponibilidad() {
        return userTime;
    }

    public void setUserDiponibilidad(String userDiponibilidad) {
        this.userTime = userDiponibilidad;
    }
}



