<?php
/**
 * PrimeSource IT Consulting Theme Functions
 *
 * @package PrimeSource
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function primesource_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 300,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary'   => __('Primary Menu', 'primesource'),
        'footer'    => __('Footer Menu', 'primesource'),
    ));

    // Set content width
    if (!isset($content_width)) {
        $content_width = 1280;
    }
}
add_action('after_setup_theme', 'primesource_setup');

/**
 * Enqueue Scripts and Styles
 */
function primesource_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'primesource-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'primesource-style',
        get_stylesheet_uri(),
        array('primesource-fonts'),
        wp_get_theme()->get('Version')
    );

    // Main JavaScript
    wp_enqueue_script(
        'primesource-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );

    // Smooth scroll for anchor links
    wp_add_inline_script('primesource-script', '
        document.addEventListener("DOMContentLoaded", function() {
            // Mobile menu toggle
            const menuToggle = document.querySelector(".menu-toggle");
            const mainNav = document.querySelector(".main-navigation");
            
            if (menuToggle && mainNav) {
                menuToggle.addEventListener("click", function() {
                    mainNav.classList.toggle("active");
                });
            }

            // Smooth scroll for anchor links
            document.querySelectorAll(\'a[href^="#"]\').forEach(anchor => {
                anchor.addEventListener("click", function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute("href"));
                    if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                });
            });

            // Header scroll effect
            const header = document.querySelector(".site-header");
            window.addEventListener("scroll", function() {
                if (window.scrollY > 50) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }
            });
        });
    ');
}
add_action('wp_enqueue_scripts', 'primesource_scripts');

/**
 * Register Widget Areas
 */
function primesource_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer Widget 1', 'primesource'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here for footer column 1.', 'primesource'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4>',
        'after_title'   => '</h4>',
    ));

    register_sidebar(array(
        'name'          => __('Footer Widget 2', 'primesource'),
        'id'            => 'footer-2',
        'description'   => __('Add widgets here for footer column 2.', 'primesource'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4>',
        'after_title'   => '</h4>',
    ));

    register_sidebar(array(
        'name'          => __('Footer Widget 3', 'primesource'),
        'id'            => 'footer-3',
        'description'   => __('Add widgets here for footer column 3.', 'primesource'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4>',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'primesource_widgets_init');

/**
 * Customizer Settings
 */
function primesource_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title'    => __('Hero Section', 'primesource'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('hero_title', array(
        'default'           => 'Transform Your Business with <span>Expert IT Solutions</span>',
        'sanitize_callback' => 'wp_kses_post',
    ));

    $wp_customize->add_control('hero_title', array(
        'label'   => __('Hero Title', 'primesource'),
        'section' => 'hero_section',
        'type'    => 'textarea',
    ));

    $wp_customize->add_setting('hero_description', array(
        'default'           => 'We deliver cutting-edge technology services, staffing solutions, and digital marketing strategies to help your business thrive in the digital age.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('hero_description', array(
        'label'   => __('Hero Description', 'primesource'),
        'section' => 'hero_section',
        'type'    => 'textarea',
    ));

    $wp_customize->add_setting('hero_button_text', array(
        'default'           => 'Get Started',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_button_text', array(
        'label'   => __('Primary Button Text', 'primesource'),
        'section' => 'hero_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('hero_button_link', array(
        'default'           => '#contact',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('hero_button_link', array(
        'label'   => __('Primary Button Link', 'primesource'),
        'section' => 'hero_section',
        'type'    => 'url',
    ));

    // Contact Section
    $wp_customize->add_section('contact_section', array(
        'title'    => __('Contact Information', 'primesource'),
        'priority' => 35,
    ));

    $wp_customize->add_setting('contact_email', array(
        'default'           => 'info@primesourceitsc.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('contact_email', array(
        'label'   => __('Email Address', 'primesource'),
        'section' => 'contact_section',
        'type'    => 'email',
    ));

    $wp_customize->add_setting('contact_phone', array(
        'default'           => '+1 (555) 123-4567',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('contact_phone', array(
        'label'   => __('Phone Number', 'primesource'),
        'section' => 'contact_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('contact_address', array(
        'default'           => '123 Business Avenue, Tech City, TC 12345',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('contact_address', array(
        'label'   => __('Address', 'primesource'),
        'section' => 'contact_section',
        'type'    => 'textarea',
    ));

    // Social Links
    $wp_customize->add_section('social_section', array(
        'title'    => __('Social Media Links', 'primesource'),
        'priority' => 40,
    ));

    $social_networks = array('facebook', 'twitter', 'linkedin', 'instagram');
    
    foreach ($social_networks as $network) {
        $wp_customize->add_setting('social_' . $network, array(
            'default'           => '',
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control('social_' . $network, array(
            'label'   => ucfirst($network) . ' URL',
            'section' => 'social_section',
            'type'    => 'url',
        ));
    }
}
add_action('customize_register', 'primesource_customize_register');

/**
 * Custom Post Type: Services
 */
function primesource_register_services() {
    $labels = array(
        'name'               => __('Services', 'primesource'),
        'singular_name'      => __('Service', 'primesource'),
        'menu_name'          => __('Services', 'primesource'),
        'add_new'            => __('Add New', 'primesource'),
        'add_new_item'       => __('Add New Service', 'primesource'),
        'edit_item'          => __('Edit Service', 'primesource'),
        'new_item'           => __('New Service', 'primesource'),
        'view_item'          => __('View Service', 'primesource'),
        'search_items'       => __('Search Services', 'primesource'),
        'not_found'          => __('No services found', 'primesource'),
        'not_found_in_trash' => __('No services found in Trash', 'primesource'),
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'query_var'           => true,
        'rewrite'             => array('slug' => 'services'),
        'capability_type'     => 'post',
        'hierarchical'        => false,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-admin-tools',
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest'        => true,
    );

    register_post_type('service', $args);
}
add_action('init', 'primesource_register_services');

/**
 * Custom Post Type: Case Studies
 */
function primesource_register_case_studies() {
    $labels = array(
        'name'               => __('Case Studies', 'primesource'),
        'singular_name'      => __('Case Study', 'primesource'),
        'menu_name'          => __('Case Studies', 'primesource'),
        'add_new'            => __('Add New', 'primesource'),
        'add_new_item'       => __('Add New Case Study', 'primesource'),
        'edit_item'          => __('Edit Case Study', 'primesource'),
        'new_item'           => __('New Case Study', 'primesource'),
        'view_item'          => __('View Case Study', 'primesource'),
        'search_items'       => __('Search Case Studies', 'primesource'),
        'not_found'          => __('No case studies found', 'primesource'),
        'not_found_in_trash' => __('No case studies found in Trash', 'primesource'),
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'query_var'           => true,
        'rewrite'             => array('slug' => 'case-studies'),
        'capability_type'     => 'post',
        'hierarchical'        => false,
        'menu_position'       => 6,
        'menu_icon'           => 'dashicons-portfolio',
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest'        => true,
    );

    register_post_type('case_study', $args);
}
add_action('init', 'primesource_register_case_studies');

/**
 * Custom Post Type: Testimonials
 */
function primesource_register_testimonials() {
    $labels = array(
        'name'               => __('Testimonials', 'primesource'),
        'singular_name'      => __('Testimonial', 'primesource'),
        'menu_name'          => __('Testimonials', 'primesource'),
        'add_new'            => __('Add New', 'primesource'),
        'add_new_item'       => __('Add New Testimonial', 'primesource'),
    );

    $args = array(
        'labels'              => $labels,
        'public'              => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'menu_position'       => 7,
        'menu_icon'           => 'dashicons-format-quote',
        'supports'            => array('title', 'editor', 'thumbnail'),
        'show_in_rest'        => true,
    );

    register_post_type('testimonial', $args);
}
add_action('init', 'primesource_register_testimonials');

/**
 * Contact Form Handler
 */
function primesource_handle_contact_form() {
    if (!isset($_POST['primesource_contact_nonce']) || 
        !wp_verify_nonce($_POST['primesource_contact_nonce'], 'primesource_contact_form')) {
        wp_die('Security check failed');
    }

    $name    = sanitize_text_field($_POST['contact_name']);
    $email   = sanitize_email($_POST['contact_email']);
    $phone   = sanitize_text_field($_POST['contact_phone']);
    $service = sanitize_text_field($_POST['contact_service']);
    $message = sanitize_textarea_field($_POST['contact_message']);

    $to      = get_option('admin_email');
    $subject = 'New Contact Form Submission - ' . $name;
    $body    = "Name: $name\n";
    $body   .= "Email: $email\n";
    $body   .= "Phone: $phone\n";
    $body   .= "Service Interest: $service\n\n";
    $body   .= "Message:\n$message";

    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . $name . ' <' . $email . '>',
        'Reply-To: ' . $email,
    );

    $sent = wp_mail($to, $subject, $body, $headers);

    if ($sent) {
        wp_redirect(home_url('/?contact=success#contact'));
    } else {
        wp_redirect(home_url('/?contact=error#contact'));
    }
    exit;
}
add_action('admin_post_primesource_contact', 'primesource_handle_contact_form');
add_action('admin_post_nopriv_primesource_contact', 'primesource_handle_contact_form');

/**
 * Helper function to get theme mod with default
 */
function primesource_get_option($key, $default = '') {
    return get_theme_mod($key, $default);
}
