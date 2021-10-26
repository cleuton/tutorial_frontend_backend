package guru.desenvolvedor.tutoriais.noticias;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import guru.desenvolvedor.curso.persistence.Aviso;
import guru.desenvolvedor.curso.persistence.AvisoRepository;

@SpringBootApplication
public class AvisoRestProjectApplication {
	
	private static final Logger log = LoggerFactory.getLogger(AvisoRestProjectApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(AvisoRestProjectApplication.class, args);
	}
	
	/*
	 * @Bean public CommandLineRunner demo (AvisoRepository repository) { return
	 * (args) -> { for (Aviso aviso : repository.findAll()) {
	 * log.info(aviso.toString()); } log.info(""); }; }
	 */

}
