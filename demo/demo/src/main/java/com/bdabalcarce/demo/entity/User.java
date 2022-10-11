package com.bdabalcarce.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table (name="users")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_user;

    @NotNull
    @Size (min= 8, max = 10)//min 8 caracteres porque es la cantidad de nros. en un dni en caso de omitir puntos
    @Column(name = "user_dni")
    private String userDni;

    @Size (min= 5, max = 12)
    @Column(name = "user_rol")
    private String userRol;

    @NotNull
    @Size (min= 1, max = 25)
    @Column(name = "user_name")
    private String userName;

    @NotNull
    @Size (min= 1, max = 25)
    @Column(name = "user_lastname")
    private String userLastname;

    @Size (min= 1, max = 25)
    @Column(name = "user_email")
    private String userEmail;

    @Size (min= 1, max = 15)
    @Column(name = "user_phone")
    private String userPhone;

    @Size (min= 1, max = 50)
    @Column(name = "user_address")
    private String userAdress;

    @Size (min= 1, max = 10)
    @Column(name = "user_vehicle")
    private String userVehicle;

    @Size (min= 1, max = 10)
    @Column(name = "user_abailability")
    private String userAbailability;

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER,cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.DETACH,CascadeType.REFRESH})
    private List<Donation> donaciones = new ArrayList<Donation>();


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

    public User(String userDni, String userName, String userLastname) {
        this.userDni = userDni;
        this.userName = userName;
        this.userLastname = userLastname;
    }


    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public String getUserDni() {
        return userDni;
    }

    public void setUserDni(String userDni) {
        this.userDni = userDni;
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

