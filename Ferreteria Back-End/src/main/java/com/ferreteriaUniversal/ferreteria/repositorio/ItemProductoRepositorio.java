package com.ferreteriaUniversal.ferreteria.repositorio;


import java.util.List;
import org.springframework.data.repository.Repository;
import com.ferreteriaUniversal.ferreteria.model.ItemProducto;;

public interface ItemProductoRepositorio extends Repository<ItemProducto, Long> {
	List<ItemProducto> findAll();
	ItemProducto findOne(long id);
	List<ItemProducto> findcode(String codigo);
	ItemProducto save(ItemProducto itemProducto);
	void delete(ItemProducto itemProducto);

}
