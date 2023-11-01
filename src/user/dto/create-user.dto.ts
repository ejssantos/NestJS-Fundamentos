import { IsString, IsEmail, IsStrongPassword, Length, IsOptional, IS_DATE_STRING, IsDateString } from "class-validator";

export class CreateUserDTO {
  @IsString()
  @Length(3)
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minLowercase: 0,
    minUppercase: 0,
    minNumbers: 0,
    minSymbols: 0,
  })
  password: string;

  @IsOptional()
  @IsDateString()
  birthAt: Date;
}
