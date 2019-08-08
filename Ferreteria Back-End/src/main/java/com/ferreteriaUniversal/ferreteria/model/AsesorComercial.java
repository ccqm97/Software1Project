/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Viviana
 */
@Entity
@Table(name = "asesorescomerciales")
public class AsesorComercial implements Serializable {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)        
    private int id_asesor ;
    @Column
    private String nombresAsesor;
    @Column
    private String apellidosAsesor;
    @Column
    private String correoAsesor;
    @Column
    private int telefonoAsesor;

    public AsesorComercial() {
    }

    public AsesorComercial(int id_asesor, String nombresAsesor, String apellidosAsesor, String correoAsesor, int telefonoAsesor) {
        this.id_asesor = id_asesor;
        this.nombresAsesor = nombresAsesor;
        this.apellidosAsesor = apellidosAsesor;
        this.correoAsesor = correoAsesor;
        this.telefonoAsesor = telefonoAsesor;
    }
    
    public int getId_asesor() {
        return id_asesor;
    }

    public void setId_asesor(int id_asesor) {
        this.id_asesor = id_asesor;
    }

    public String getNombresAsesor() {
        return nombresAsesor;
    }

    public void setNombresAsesor(String nombresAsesor) {
        this.nombresAsesor = nombresAsesor;
    }

    public String getApellidosAsesor() {
        return apellidosAsesor;
    }

    public void setApellidosAsesor(String apellidosAsesor) {
        this.apellidosAsesor = apellidosAsesor;
    }

    public String getCorreoAsesor() {
        return correoAsesor;
    }

    public void setCorreoAsesor(String correoAsesor) {
        this.correoAsesor = correoAsesor;
    }

    public int getTelefonoAsesor() {
        return telefonoAsesor;
    }

    public void setTelefonoAsesor(int telefonoAsesor) {
        this.telefonoAsesor = telefonoAsesor;
    }
 
}