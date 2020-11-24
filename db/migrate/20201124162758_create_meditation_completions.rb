class CreateMeditationCompletions < ActiveRecord::Migration[5.2]
  def change
    create_table :meditation_completions do |t|
      t.integer :med_id, null: false
      t.integer :user_pack_id, null: false
      
      t.timestamps
    end
    add_index :meditation_completions, :med_id
    add_index :meditation_completions, :user_pack_id
    add_index :meditations, :pack_id
  end
end
