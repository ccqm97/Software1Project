/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteria.services;

import com.ferreteria.ferreteria.Proveedor;
import java.util.List;
/**
 *
 * @author Viviana
 */
public interface ProveedorService {
    
    List<Proveedor> list();    
    Proveedor listNIT(long id);
    Proveedor add(Proveedor proveedor);
    Proveedor edit(Proveedor proveedor);
    Proveedor delete(long id);
}
