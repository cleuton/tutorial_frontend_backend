package guru.desenvolvedor.tutoriais.noticias;


import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "api", path = "api")
public interface AvisoRepository extends PagingAndSortingRepository<Aviso, Long> {

}
