/* eslint-disable @typescript-eslint/no-unused-vars */
type Name = "Rabdya santhosh";
type Greeting = `Hello ${Name}`;

/**
 * type greeting = "Hello Rabdya Santhosh"
 */

type EmailLocaleID = "welcome_email" | "email_heading";
type FooterLocaleID = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleID | FooterLocaleID}_id`;
/**
 * type allLocaleIDs = "welcome_email_id" | "email_heading_id" 
 *                      | "footer_title_id" | "footer_sendoff_id"
 */
type Lang = "en" | "ja" | "pt";
type LocaleMessageID = `${Lang}_${AllLocaleIDs}_id`;
/**
 * type localeMessageID = "en_welcome_email_id_id" | "en_email_heading_id_id" 
 *                      | "en_footer_title_id_id" | "en_footer_sendoff_id_id"
 */

/**
 * type greeting1 = "HELLO RABDYA SANTHOSH"
 * type greeting2 = "hello rabdya santhosh"
 * type greeting3 = "Welcome_email" | "Email_heading"
 * type greeting4 = "rabdya santhosh"
 */
type Greeting1 = Uppercase<Greeting>;
type Greeting2 = Lowercase<Greeting>;
type Greeting3= Capitalize<EmailLocaleID>;
type Greeting4= Uncapitalize<Name>;