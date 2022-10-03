package com.bdabalcarce.demo.Entities;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;


@Entity
@Table (name="users")
public class Users implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //campo primary key autogenerado
    private int id_user;


    @Size (max = 12)
    @Column(name = "user_rol")
    private String userRol;

    @NotBlank
    @Size (max = 25)
    @Column(name = "user_name")
    private String userName;

    @NotBlank
    @Size (max = 25)
    @Column(name = "user_lastname")
    private String userLastname;

    @NotBlank
    @Size (max = 10)
    @Column(name = "user_dni")
    private String userDni;


    @Size (max = 25)
    @Column(name = "user_email")
    private String userEmail;

    @Size (max = 15)
    @Column(name = "user_phone")
    private String userPhone;

    @Size (max = 50)
    @Column(name = "user_address")
    private String userAdress;

    @Size (max = 10)
    @Column(name = "user_vehicle")
    private String userVehicle;

    @Size (max = 10)
    @Column(name = "user_abailability")
    private String userAbailability;

    public Users() {
    }

    public Users(String userRol, String userName, String userLastname, String userDni, String userEmail, String userPhone, String userAdress, String userVehicle, String userAbailability) {
        this.userRol = userRol;
        this.userName = userName;
        this.userLastname = userLastname;
        this.userDni = userDni;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
        this.userAdress = userAdress;
        this.userVehicle = userVehicle;
        this.userAbailability = userAbailability;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
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
}

