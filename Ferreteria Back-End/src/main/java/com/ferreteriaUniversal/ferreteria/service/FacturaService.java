/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.service;

import com.ferreteriaUniversal.ferreteria.model.Factura;
import java.util.List;

/**
 *
 * @author Viviana
 */
public interface FacturaService {
    
    List<Factura> list();    
    Factura listId(long id);
    Factura add(Factura factura);
    Factura edit(Factura factura);
    Factura delete(long id);
}
