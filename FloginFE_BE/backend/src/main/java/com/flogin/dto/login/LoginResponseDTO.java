package com.flogin.dto.login;

import lombok.Data;

@Data
public class LoginResponseDTO {
    private String header = "Bearer Token";
    private String accessToken;

    public LoginResponseDTO(String accessToken) {
        this.accessToken = accessToken;
    }
}
