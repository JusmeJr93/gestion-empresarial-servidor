import { check, validationResult } from "express-validator";

export const validarCampos = [
    check('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ max: 255 }).withMessage('El nombre no puede exceder 255 caracteres.'),
    check('fecha_constitucion')
        .notEmpty().withMessage('La fecha de constitución es obligatoria'),
    check('tipo_empresa')
        .notEmpty().withMessage('El tipo de empresa es obligatorio'),
    check('comentarios')
        .isLength({ max: 1020 }).withMessage('Los comentarios no pueden exceder 1,020 caracteres'),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    }
];