package com.bdabalcarce.demo.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;


@Entity
@Table (name="users")
public class User implements Serializable {
    @Id
    @NotNull
    @Size (max = 10)
    @Column(name = "user_dni")
    private String userDni;

    @Size (max = 12)
    @Column(name = "user_rol")
    private String userRol;

    @NotNull
    @Size (max = 25)
    @Column(name = "user_name")
    private String userName;

    @NotNull
    @Size (max = 25)
    @Column(name = "user_lastname")
    private String userLastname;

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

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY,cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.DETACH,CascadeType.REFRESH})
    private List<Donation> donaciones;


    public User() {
    }

    public User(String userDni, String userRol, String userName, String userLastname, String userEmail, String userPhone, String userAdress, String userVehicle, String userAbailability) {
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


}
