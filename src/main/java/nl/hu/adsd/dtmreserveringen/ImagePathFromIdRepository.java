package nl.hu.adsd.dtmreserveringen;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImagePathFromIdRepository extends CrudRepository<ImagePathFromId, Long> {
}