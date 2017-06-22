<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
define('FS_METHOD', 'direct');
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'upwiththelarks');

/** MySQL database username */
define('DB_USER', 'admin');

/** MySQL database password */
define('DB_PASSWORD', 'D2rtyh0rses');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'd(Udu{a$~c?;Uy`k%4n#?e?M9bvm=%PSkR)fW}ff!j_jEsbHF-hw&>`%HV7?n(aU');
define('SECURE_AUTH_KEY',  'G!1D4O_ebI$i({:@=bHV?R/:c WXox0D*Nm`-@h}*|*cg3o8YYZ*!i_Ac-#(ypEJ');
define('LOGGED_IN_KEY',    'v)hbL{V=UhV)qg6@Y5sse#Z1hGMjZpVn;}05wk^6c{W<7sQ#{~9`,UNU#A#/A2*t');
define('NONCE_KEY',        'Tn)rK.CIiA-Z5.Q@!:ag^t%%@XIycMWS9SOXb`Zor(x|~sNb(Hz/5g3|#zIF]hA[');
define('AUTH_SALT',        '=7d>8+ke c;xdL72a~CsCi:6MfG-Uq)dAoEAR,VXIu&4KC<9dt>7?Is*ySCZft=I');
define('SECURE_AUTH_SALT', 'RI~dMWYZVRpmW,xA*:KkxHZl!vckGAoO+s*DaUAM#SjdB12l|S=3Q?C2mbG&y|Su');
define('LOGGED_IN_SALT',   'lSqhX;q?%r/=*$1/g,2&XvZ.qIp>Ls[2aB&%=a-BI>yMYtf]CS^Ux>:Pr}~y?A n');
define('NONCE_SALT',       'V.d;p<tRf.3jAqw0d?OJ4ALjpiw];o@J.~sN^GJB)N7r((W&<[?^<,_$3;@jRx{F');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');


define( 'WP_ALLOW_REPAIR', true );

