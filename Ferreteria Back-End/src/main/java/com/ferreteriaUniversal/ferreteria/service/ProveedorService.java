/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.service;

import com.ferreteriaUniversal.ferreteria.model.Proveedor;
import java.util.List;
/**
 *
 * @author Viviana
 */
public interface ProveedorService {
    
    List<Proveedor> list();    
    Proveedor listNIT(int id);
    Proveedor add(Proveedor proveedor);
    Proveedor edit(Proveedor proveedor);
    Proveedor delete(int id);
}
