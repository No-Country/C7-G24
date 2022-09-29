package com.bdabalcarce.demo.entity;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;
import java.io.Serializable;


@Entity
public class user implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //campo primary key autogenerado
    private int id_user;

    @NotNull
    @Size (min = 1, max = 50)
    private String userName;

    @NotNull
    @Size(min = 1, max = 50)
    private String userLastname;

    @Size(min = 1, max = 50)
    private String userEmail;

    @Size(min = 1, max = 50)
    private String userPhone;

    @Size(min = 1, max = 50)
    private String userDireccion;

    @Size(min = 1, max = 50)
    private String userVehicle;

    @Size(min = 1, max = 50)
    private String userDiponibilidad;

    public user() {
    }

    public user(String userName, String userLastname, String userEmail, String userPhone, String userDireccion, String userVehicle, String userDiponibilidad) {
        this.userName = userName;
        this.userLastname = userLastname;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
        this.userDireccion = userDireccion;
        this.userVehicle = userVehicle;
        this.userDiponibilidad = userDiponibilidad;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
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

    public String getEmail() {
        return userEmail;
    }

    public void setEmail(String email) {
        this.userEmail = email;
    }

    public String getPhone() {
        return userPhone;
    }

    public void setPhone(String phone) {
        this.userPhone = phone;
    }

    public String getDireccion() {
        return userDireccion;
    }

    public void setDireccion(String direccion) {
        this.userDireccion = direccion;
    }

    public String getVehicle() {
        return userVehicle;
    }

    public void setVehicle(String vehicle) {
        this.userVehicle = vehicle;
    }

    public String getDiponibilidad() {
        return userDiponibilidad;
    }

    public void setDiponibilidad(String diponibilidad) {
        this.userDiponibilidad = diponibilidad;
    }
}
