package com.c7g24.bdaBalcarce.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class users {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY) //campo primary key autogenerado
    private int id_user;
    private String userName;
    private String userLastname;
    private String userDni;
    private String email;
    private String phone;
    private String direccion;
    private String vehicle;
    private String diponibilidad;

    public users() {
    }

    public users(String userName, String userLastname, String userDni, String email, String phone, String direccion, String vehicle, String diponibilidad) {
        this.userName = userName;
        this.userLastname = userLastname;
        this.userDni = userDni;
        this.email = email;
        this.phone = phone;
        this.direccion = direccion;
        this.vehicle = vehicle;
        this.diponibilidad = diponibilidad;
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

    public String getUserDni() {
        return userDni;
    }

    public void setUserDni(String userDni) {
        this.userDni = userDni;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getVehicle() {
        return vehicle;
    }

    public void setVehicle(String vehicle) {
        this.vehicle = vehicle;
    }

    public String getDiponibilidad() {
        return diponibilidad;
    }

    public void setDiponibilidad(String diponibilidad) {
        this.diponibilidad = diponibilidad;
    }
}
