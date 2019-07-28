/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteria.services;

import com.ferreteria.ferreteria.Persona;
import java.util.List;

/**
 *
 * @author oscar
 */
public interface PersonaService {
    
    List<Persona> list();    
    Persona listId(long id);
    Persona add(Persona producto);
    Persona edit(Persona producto);
    Persona delete(long id);
}
