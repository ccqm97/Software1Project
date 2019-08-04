/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.service;

import com.ferreteriaUniversal.ferreteria.model.Producto;
import java.util.List;

/**
 *
 * @author Viviana
 */
public interface ProductoService {
    List<Producto> list();    
    Producto listID(int id);
    Producto add(Producto producto);
    Producto edit(Producto producto);
    Producto delete(int id);   
}