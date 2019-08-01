/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.model;

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
public class AsesorComercial {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)        
    private int id_asesor ;
    @Column
    private String nombre_asesor;
    @Column
    private String correo_asesor;
    @Column
    private int telefono_asesor;

    public AsesorComercial(int id_asesor, String nombre_asesor, String correo_asesor, int telefono_asesor) {
        this.id_asesor = id_asesor;
        this.nombre_asesor = nombre_asesor;
        this.correo_asesor = correo_asesor;
        this.telefono_asesor = telefono_asesor;
    }
    
    public int getId_asesor() {
        return id_asesor;
    }

    public String getNombre_asesor() {
        return nombre_asesor;
    }

    public String getCorreo_asesor() {
        return correo_asesor;
    }

    public int getTelefono_asesor() {
        return telefono_asesor;
    }

    public void setId_asesor(int id_asesor) {
        this.id_asesor = id_asesor;
    }

    public void setNombre_asesor(String nombre_asesor) {
        this.nombre_asesor = nombre_asesor;
    }

    public void setCorreo_asesor(String correo_asesor) {
        this.correo_asesor = correo_asesor;
    }

    public void setTelefono_asesor(int telefono_asesor) {
        this.telefono_asesor = telefono_asesor;
    }

}