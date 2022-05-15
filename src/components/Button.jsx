import React from "react";
import styled, { ThemeProvider } from "styled-components";
const Button = ({
  onHover,
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
}) => {
  return (
    <button
      type="button"
      className={`btn ${onHover && "hover"} ${
        (variant === "outline" ? "outline" : null) ||
        (variant === "text" && "text")
      } ${disableShadow && "disableShadow"} ${disabled && "disabled"} ${
        (endIcon && "btn-with-icon") || (startIcon && "btn-with-icon")
      } ${
        (size === "sm" && "small-btn") ||
        (size === "md" && "medium-btn") ||
        (size === "lg" && "large-btn")
      }
      ${
        (color === "default" && "default-btn") ||
        (color === "primary" && "primary-color-btn") ||
        (color === "secondary" && "secondary-color-btn") ||
        (color === "danger" && "danger-color-btn")
      }`}
    >
      {(startIcon === "local_grocery_store" && (
        <span class="material-symbols-outlined start-icon icon">
          add_shopping_cart
        </span>
      )) ||
        (startIcon === "person-remove" && (
          <span class="material-symbols-outlined start-icon icon">
            person_remove
          </span>
        )) ||
        (startIcon === "person-add" && (
          <span class="material-symbols-outlined start-icon icon">
            person_add
          </span>
        )) ||
        (startIcon === "add" && (
          <span class="material-symbols-outlined start-icon icon">add</span>
        )) ||
        (startIcon === "remove" && (
          <span class="material-symbols-outlined start-icon icon">remove</span>
        ))}
      {(disabled && "Disabled") ||
        (color === "secondary" && "Secondary") ||
        (color === "danger" && "danger") ||
        "Default"}
      {(endIcon === "local_grocery_store" && (
        <span class="material-symbols-outlined end-icon icon">
          add_shopping_cart
        </span>
      )) ||
        (endIcon === "person-remove" && (
          <span class="material-symbols-outlined end-icon icon">
            person_remove
          </span>
        )) ||
        (endIcon === "person-add" && (
          <span class="material-symbols-outlined end-icon icon">
            person_add
          </span>
        )) ||
        (endIcon === "add" && (
          <span class="material-symbols-outlined end-icon icon">add</span>
        )) ||
        (endIcon === "remove" && (
          <span class="material-symbols-outlined end-icon icon">remove</span>
        ))}
    </button>
  );
};

export default Button;
