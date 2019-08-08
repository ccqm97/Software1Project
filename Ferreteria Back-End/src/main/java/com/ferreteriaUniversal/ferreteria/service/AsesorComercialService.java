/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.service;

import com.ferreteriaUniversal.ferreteria.model.AsesorComercial;
import java.util.List;

/**
 *
 * @author Viviana
 */
public interface AsesorComercialService {
    
    List<AsesorComercial> list();    
    AsesorComercial listId(long id);
    AsesorComercial add(AsesorComercial asesorComercial);
    AsesorComercial edit(AsesorComercial asesorComercial);
    AsesorComercial delete(long id);
}
