package Dto;

import javax.validation.constraints.NotBlank;

public class userDto {
    @NotBlank
    private String userName;

    @NotBlank
    private String userLastname;


    @NotBlank
    private String userEmail;

    @NotBlank
    private String userPhone;

    @NotBlank
    private String userDireccion;


    private String userVehicle;


    private String userDiponibilidad;

    public userDto() {
    }

    public userDto(String userName, String userLastname, String userEmail, String userPhone, String userDireccion, String userVehicle, String userDiponibilidad) {
        this.userName = userName;
        this.userLastname = userLastname;
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
