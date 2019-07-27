/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteria.services;

import com.ferreteria.ferreteria.Producto;
import java.util.List;

/**
 *
 * @author oscar
 */
public interface ProductoService {
    
    List<Producto> list();    
    Producto listId(long id);
    Producto add(Producto producto);
    Producto edit(Producto producto);
    Producto delete(long id);
}
