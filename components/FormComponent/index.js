import React, { useRef } from "react";
import { useRouter } from "next/router";
import { useFormDataContext } from "@/Context/FormDataContext";
import { LanguageManager } from "@/i18n";
import styles from "./style/FormComponent.module.css";

const FormComponent = (props) => {
  const { locale } = useRouter();
  const t = (text) => LanguageManager(locale)[text];

  const { onUpdateDataset, onRemove } = useFormDataContext();
  const u = useRef(props.item.data?.username);
  const e = useRef(props.item.data?.email);
  const z = useRef(props.item.data?.zipcode);

  const onChange = () => {
    const name = u.current.value;
    const email = e.current.value;
    const zip = z.current.value;

    const obj = {
      _id: props.item.data?._id,
      username: name,
      email: email,
      zipcode: zip,
    };
    onUpdateDataset(props.item.index, obj);
  };

  return (
    <div
      className={styles.panel_card}
      key={props.item.data?._id || props.item?.index}
    >
      <div className={styles.panel_title}>
        {t("card_name")} {props.item.index + 1}{" "}
        <span
          onClick={() => onRemove(props.item.index, props.item.data._id || "")}
        >
          {t("remove")}
        </span>
      </div>
      <div className={styles.panel_body}>
        <div className={styles.panel_item}>
          <label>{t("name")}</label>
          <input
            type="text"
            value={props.item.data?.username}
            ref={u}
            onChange={onChange}
            required={true}
          />
        </div>
        <div className={styles.panel_item}>
          <label>{t("email")}</label>
          <input
            type="email"
            value={props.item.data?.email}
            ref={e}
            onChange={onChange}
            required={true}
          />
        </div>
        <div className={styles.panel_item}>
          <label>{t("postcode")}</label>
          <input
            type="number"
            value={props.item.data?.zipcode}
            onChange={onChange}
            ref={z}
          />
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
