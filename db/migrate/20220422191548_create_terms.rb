class CreateTerms < ActiveRecord::Migration[7.0]
  def change
    create_table :terms do |t|
      t.string :name
      t.belongs_to :language, null: false, foreign_key: true
      t.string :definition

      t.timestamps
    end
  end
end
