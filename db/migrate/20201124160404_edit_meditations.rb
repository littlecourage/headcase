class EditMeditations < ActiveRecord::Migration[5.2]
  def change
    remove_index :meditations, name: "index_meditations_on_pack_id_and_audio_id"
    remove_column :meditations, :audio_id
  end
end
