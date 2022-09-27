package entity;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.contraint.Size;

@Entity
public class user {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //campo primary key autogenerado
    private int id_user;

    @NotNull
    @Size(min = 1, max = 50)
    private String userName;

    @NotNull
    @Size(min = 1, max = 50)
    private String userLastname;

    @Size(min = 1, max = 50)
    private String email;

    @Size(min = 1, max = 50)
    private String phone;

    @Size(min = 1, max = 50)
    private String direccion;

    @Size(min = 1, max = 50)
    private String vehicle;

    @Size(min = 1, max = 50)
    private String diponibilidad;

    public user() {
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
