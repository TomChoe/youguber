package com.example.favoritesapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "FAVORITES")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_ID")
    private Integer userId;

    @Column(name = "FAVS")
    private String favs;

    public Favorite(Integer userid, String favs) {
        this.userId = userid;
        this.favs = favs;
    }
}